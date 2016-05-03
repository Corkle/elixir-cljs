defmodule ElixirCljs.Changeset do
  alias __MODULE__

  defstruct valid?: false,
            struct: nil,
            params: nil,
            required: [],
            optional: [],
            errors: [],
            validations: [],

  def cast(struct, params, required, optional) do
    params = convert_params(params)
    valid? = false
    %Changeset{params: params, struct: struct, valid?: valid?,
               required: required, optional: optional}
  end
  
  defp convert_params(params) do
    Enum.reduce(params, nil, fn
      {key, _value}, nil when is_binary(key) ->
        nil

      {key, _value}, _ when is_binary(key) ->
        raise ArgumentError, "expected params to be a map with atoms or string keys, " <>
                             "got a map with mixed keys: #{inspect params}"

      {key, value}, acc when is_atom(key) ->
        Map.put(acc || %{}, Atom.to_string(key), value)

    end) || params
  end
end