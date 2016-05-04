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
    |> validate_length(:password, min: 5)
    |> validate_confirmation(:password, message: "Password does not match")
  end
end