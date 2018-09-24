class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :name
      t.string :date, null: false
      t.string :model, null: false
      t.string :identification, null: false
      t.string :arrival
      t.string :departure
      t.integer :airplane_sel
      t.integer :airplane_mel
      t.integer :dual_received
      t.integer :pic_hours
      t.integer :day_hours
      t.integer :night_hours
      t.integer :cross_country_hours
      t.integer :actual_instrument_hours
      t.integer :simulated_instrument
      t.integer :ground_trainer
      t.integer :num_instrument_approaches
      t.integer :num_landings_day
      t.integer :num_landings_night
      t.integer :total_duration
      t.text :remarks

      t.timestamps
    end
  end
end
