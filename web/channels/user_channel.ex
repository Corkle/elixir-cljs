defmodule ElixirCljs.UserChannel do
  use ElixirCljs.Web, :channel
  
  def join("users:" <> user_id, _params, socket) do
    {:ok, socket}
  end
end