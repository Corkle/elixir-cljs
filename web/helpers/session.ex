defmodule ElixirCljs.Session do
  alias ElixirCljs.{Query, User}
  
  def authenticate(%{"username" => username, "password" => password}) do
    case Query.get(User, username) do
      {:ok, user} ->
        IO.inspect(user)
        case check_password(user, password) do
          true -> {:ok, user}
          _ -> :error
        end
      {:error, _} -> :error
    end
  end
  
  defp check_password(user, password) do
    case user do
      nil -> false
      _ -> Comeonin.Bcrypt.checkpw(password, user.encrypted_password)
    end
  end
end