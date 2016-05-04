defmodule ElixirCljs.Query do

  alias ElixirCljs.DB
  alias RethinkDB.Record
  alias RethinkDB.Query

  def table(table) do
    Query.table(table)
    |>DB.run
    |> catch_errors
  end

  def get(table, id) when is_bitstring(id) do
    Query.table(table)
    |> Query.get(id)
    |> DB.run
    |> catch_errors
    |> handle_get_response
  end

  def get(table, index, value) do
    Query.table(table)
    |> Query.get_all([value], %{index: index})
    |> DB.run
    |> catch_errors
    |> handle_get_response
  end

  def get_many(table, index, value) do
    Query.table(table)
    |> Query.get_all([value], %{index: index})
    |> DB.run
    |> catch_errors
    |> handle_get_many_response
  end

  def get_many(table, params) when is_map(params)do
    Query.table(table)
    |> Query.filter(params)
    |> DB.run
    |> catch_errors
    |> handle_get_many_response
  end

  def insert(changeset = %Ecto.Changeset{}) do
    case changeset.errors do
      [] ->
        do_insert(changeset)
      _ ->
        {:error, changeset}
    end
  end
  
  def insert(model) do
    changeset = Ecto.Changeset.change(model)
    insert(changeset)
  end

  def do_insert(changeset) do
    model = Ecto.Changeset.apply_changes(changeset)
    module = model.__struct__
    Ecto.Model.Callbacks.__apply__(module, :before_insert, changeset)
    table = model_table(model)
    data = model
      |> Map.from_struct
      |> Map.delete(:__meta__)
      |> Map.delete(:id)
      |> Map.put(:inserted_at, Query.now)
      |> Map.put(:updated_at, Query.now)
    result = Query.table(table)
      |> Query.insert(data, %{return_changes: true})
      |> DB.run
      |> catch_errors
    case result do
      %{"inserted" => 1, "changes" => changes} ->
        new_val = List.first(changes)["new_val"]
        model = load_model(module, new_val)
        changeset = %{changeset | model: model}
        Ecto.Model.Callbacks.__apply__(module, :after_insert, changeset)
        {:ok, model}
      {:error, error} -> {:error, error}
    end
    #uery.table(table)
    #> Query.insert(doc, %{return_changes: true})
    #|> DB.run
    #|> catch_errors
    #|> handle_insert_response
  end

  def update(table, id, params) do
    Query.table(table)
    |> Query.get(id)
    |> Query.update(params)
    |> DB.run
    |> catch_errors
    |> handle_update_response
  end

  def delete(table, id) do
    Query.table(table)
    |> Query.get(id)
    |> Query.delete
    |> DB.run
    |> catch_errors
    |> handle_delete_response
  end

  def catch_errors(%RethinkDB.Exception.ConnectionClosed{}) do
    raise "Cannot connect to RethinkDB"
  end

  def catch_errors(%{data: data}) do
    case data do
      %{"first_error" => error} ->
        {:error, error}
      %{"r" => errors} ->
        {:error, List.first errors}
      %{"replaced" => 0, "skipped" => 1} ->
        {:error, "Not Found"}
      %{"deleted" => 0, "skipped" => 1} ->
        {:error, "Not Found"}
      nil ->
        {:error, "Not found"}
      _ ->
        data
    end
  end

  def handle_get_response({:error, error}), do: {:error, error}
  def handle_get_response([]), do: {:error, "Not found"}
  def handle_get_response([item]), do: {:ok, item}
  def handle_get_response(data) when is_map(data), do: {:ok, data}

  def handle_get_many_response({:error, error}), do: {:error, error}
  def handle_get_many_response(data) when is_list(data), do: data

  def handle_insert_response({:error, error}), do: {:error, error}
  def handle_insert_response(%{
    "errors" => 0,
    "inserted" => number,
    "changes" => changes,
    #"generated_keys" => _keys,
    #"deleted" => _deleted,
    #"replaced" => _replaced,
    #"skipped" => _skipped,
    #"unchanged" => _unchanged
  }) when number >= 1 do
    case number do
      1 -> {:ok, List.first(changes)["new_val"]}
      number -> {:ok, number}
    end
  end

  def handle_update_response({:error, error}), do: {:error, error}
  def handle_update_response(%{"replaced" => number, "skipped" => 0}), do: {:ok, number}

  def handle_delete_response({:error, error}), do: {:error, error}
  def handle_delete_response(%{"deleted" => number, "skipped" => 0}), do: {:ok, number}
  
  defp model_table(model) do
    struct(model).__meta__.source |> elem(1)
  end

  defp load_model(model, data) do
    Ecto.Schema.__load__(model, nil, nil, [], data, &load/2)
  end
  
  defp load(x, data) do
    {:ok, data}
  end
end
