
class Api::V1::AuthController < ApplicationController
  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      payload = { user_id: user.id}
      token = JWT.encode(payload, 'Secret', 'HS256')

      render json: { id: user.id, username: user.username, token: token }
    else
      render json: { error: 'Invalid username or password.' }
    end
  end

  def show
    token = request.headers[:Authorization].split(' ').last
    decoded_token = JWT.decode(token, 'Secret', true, { algorithm: 'HS256'})
    user_id = decoded_token[0]['user_id']
    user = User.find(user_id)

    if user
      render json: { id: user.id, username: user.username, token: token }
    else
      render json: { error: 'Invalid token.' }
    end
  end
end





# finding a user basend on the username 
# if user doesnt exist:
#   send an error back to the fe
#
# if user exists:
#  compare the pw that they entered into the form
#  with the pw_digest that exists in our db
#   if they match:
#      success!
#      send the valid user to the fe
#   if no match:
#     send an error
#    























































  # def create
    # user = User.find_by(username: params[:username])
    # if user && user.authenticate(params[:password])
      # token = JWT.encode({user_id: user.id}, 'secret', 'HS256')
      # render json: { id: user.id, username: user.username, token: token}
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end

  # def show
    # token = request.headers[:Authorization]
    # decoded_token = JWT.decode token, 'secret', true, { algorithm: 'HS256' }
    # user_id = decoded_token.first['user_id']
    # user = User.find(user_id)
    # if user
      # render json: { id: user.id, username: user.username, token: token }
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end
