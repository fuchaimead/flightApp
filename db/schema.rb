# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_24_233314) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "flights", force: :cascade do |t|
    t.integer "actual_instrument_hours"
    t.integer "airplane_mel"
    t.integer "airplane_sel"
    t.string "arrival"
    t.text "comments"
    t.integer "cross_country_hours"
    t.string "date"
    t.integer "day_hours"
    t.string "departure"
    t.integer "dual_received"
    t.integer "ground_trainer"
    t.string "identification"
    t.text "maneuvers"
    t.string "model"
    t.integer "simulated_instrument"
    t.integer "night_hours"
    t.integer "num_instrument_approaches"
    t.integer "num_landings_day"
    t.integer "num_landings_night"
    t.integer "pic_hours"
    t.integer "solo_flight"
    t.integer "total_duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
