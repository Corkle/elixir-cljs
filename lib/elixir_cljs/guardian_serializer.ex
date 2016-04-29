defmodule ElixirCljs.GuardianSerializer do
  @behaviour Guardian.Serializer
  
  alias ElixirCljs.{Query, User}
  
  def for_token(user = %User{}), do: { :ok, "User:#{user.id}" }
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("User:" <> id), do: { :ok, Query.get("users", id) }
  def from_token(_), do: { :error, "Unknown resource type" }
end