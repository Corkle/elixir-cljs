defmodule ElixirCljs.CurrentUserController do
  use ElixirCljs.Web, :controller
  
  plug Guardian.Plug.EnsureAuthenticated, handler: ElixirCljs.SessionController
  
  def show(conn, _) do
    case Guardian.Plug.current_resource(conn) do
      {:ok, user} ->
        IO.inspect(user)
        
        conn
        |> put_status(:ok)
        |> render("show.json", user: user)
      nil -> render(conn, "error.json")
    end
  end
end