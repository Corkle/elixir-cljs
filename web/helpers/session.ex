defmodule ElixirCljs.Session do
  alias ElixirCljs.{Query, User}
  
  def authenticate(%{"username" => username, "pasword" => password}) do
    user = Query.get("users", username)
    
    case check_password(user, password) do
      true -> {:ok, user}
      _ -> :error
    end
  end
  
  defp check_password(user, password) do
    case user do
      nil -> false
      _ -> Comeonin.Bcrypt.checkpw(password, user.encrypted_password)
    end
  end
end