defmodule ElixirCljs.GuardianSerializer do
  @behaviour Guardian.Serializer
  
  alias ElixirCljs.{Query, User}
  
  def for_token(user), do: { :ok, "User:#{user.username}" }
 # def for_token(user), do: IO.inspect(user.username)
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("User:" <> username), do: { :ok, Query.get("users", username) }
  def from_token(_), do: { :error, "Unknown resource type" }
end