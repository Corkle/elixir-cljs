defmodule ElixirCljs.User do
  use Ecto.Schema
  import Ecto.Changeset
  
  @derive {Poison.Encoder, only: [:username, :name]}

  schema "users" do
    field :username, :string
    field :name, :string
    field :encrypted_password, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true
    
    timestamps
  end
  
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, ~w(username name password), ~w(encrypted_password))
    |> validate_length(:username, min: 3, message: "Username must be at least 3 characters.")
    |> validate_length(:password, min: 6, message: "Password must be at least 6 characters.")
    |> validate_confirmation(:password, message: "Password does not match")
    |> generate_encrypted_password
  end
  
  defp generate_encrypted_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        put_change(changeset, :encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        changeset
    end
  end
end