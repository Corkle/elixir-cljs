defmodule ElixirCljs.SessionView do
  use ElixirCljs.Web, :view
  
  def render("show.json", %{jwt: jwt, user: user}) do
    IO.inspect(user)
    %{
      jwt: jwt,
      user: user
    }
  end
  
  def render("error.json", _) do
    %{error: "Invalid username or password"}
  end
end