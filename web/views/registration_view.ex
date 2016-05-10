defmodule ElixirCljs.RegistrationView do
  use ElixirCljs.Web, :view
  
  def render("error.json", %{changeset: changeset}) do
    errors = Enum.map(changeset.errors, fn {field, detail} ->
      %{} |> Map.put(field, render_detail(field, detail))
    end)
    
    %{
      #errors: errors
      errors: translate_errors(changeset)
    }
  end
  
  defp render_detail(field, message) do
    case field do
      :insert -> parse_error(message)
      _ -> message
    end        
  end
  
  defp parse_error(error) do
    cond do
      String.match?(error, ~r/Duplicate primary key `username`:/) -> "Username already in use."
      true -> error
    end
  end
  
  def translate_errors(changeset) do
    Ecto.Changeset.traverse_errors(changeset, &translate_error/1)
  end
      
end