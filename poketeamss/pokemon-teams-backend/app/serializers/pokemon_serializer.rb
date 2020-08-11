class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :species, :trainer_full


  def trainer_full
    @object.trainer.pokemons.count > 5
  end
end
