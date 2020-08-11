class PokemonsController < ApplicationController

  def create
    name = Faker::Name.first_name
    species = Faker::Games::Pokemon.name

    pokemon = Pokemon.create(nickname: name, species: species, trainer_id: params[:trainerId])

    render json: pokemon
  end


  def destroy
    pokemon = Pokemon.find(params[:id])



    begin
      pokemon.delete!
      render json: { message: 'success' }
    rescue
      render  json: {error: 'unable to delete'}
    end

  end
end
