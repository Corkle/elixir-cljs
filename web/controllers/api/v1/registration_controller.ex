defmodule ElixirCljs.RegistrationController do
  use ElixirCljs.Web, :controller

  alias ElixirCljs.{Query, User}

  plug :scrub_params, "user" when action in [:create]

  def create(conn, %{"user" => user_params}) do
    data = %User{
      username: user_params["username"],
      name: user_params["name"],
      encrypted_password: user_params["password"]
    }

    case Query.insert("users", Map.from_struct(data)) do
      {:ok, user} ->
        {:ok, jwt, _full_claims} = Guardian.encode_and_sign(struct(User, user), :token)

        conn
        |> put_status(:created)
        |> json(%{jwt: jwt, user: user})

      {:error, error_json} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{error: true})
    end
  end
end
