class Api::FlightsController < ApplicationController
  before_action :set_flight, only: [:destroy, :show, :update]

  def index
    render json: Flight.all
  end

  def show
    render json: @flight
  end

  def create
      flight = Flight.new(flight_params)

    if flight.save
      render json: flight, status: :created
    else 
      render json: { errors: flight.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @flight.update(flight_params)      
      render json: @flight
    else 
      render json: @flight.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @flight.destroy
  end

  private
  def set_flight 
    @flight = Flight.find(params[:id])
  end

  def flight_params 
    params.require(:flight).permit(:date, :model, :identification, :arrival, 
    :departure, :airplane_sel, :airplane_mel, :dual_received, :pic_hours, :day_hours, :night_hours, :cross_country_hours, 
    :actual_instrument_hours, :simulated_instrument, :ground_trainer, :num_instrument_approaches, :num_landings_day, 
    :num_landings_night, :total_duration, :comments, :maneuvers)
  end 
end