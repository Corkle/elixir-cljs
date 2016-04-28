defmodule ElixirCljs.PageController do
  use ElixirCljs.Web, :controller
  
  alias ElixirCljs.Query

  def index(conn, _params) do
    Query.table("users")
    |> IO.inspect
  
    render conn, "index.html"
  end
end
