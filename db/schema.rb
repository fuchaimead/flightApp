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
    t.string "date"
    t.string "model"
    t.string "identification"
    t.string "arrival"
    t.string "departure"
    t.float "airplane_sel"
    t.float "airplane_mel"
    t.float "dual_received"
    t.float "pic_hours"
    t.float "day_hours"
    t.float "night_hours"
    t.float "cross_country_hours"
    t.float "actual_instrument_hours"
    t.float "simulated_instrument"
    t.float "ground_trainer"
    t.float "num_instrument_approaches"
    t.float "num_landings_day"
    t.float "num_landings_night"
    t.float "solo_hours"
    t.float "total_duration"
    t.text "maneuvers"
    t.text "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
