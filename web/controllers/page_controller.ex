defmodule ElixirCljs.PageController do
  use ElixirCljs.Web, :controller
  
  alias ElixirCljs.Query
  alias ElixirCljs.User

  def index(conn, _params) do
#    Query.table("users")
#    |> IO.inspect
    Query.get(User, "timber")
    |> IO.inspect
  
    render conn, "index.html"
  end
end
