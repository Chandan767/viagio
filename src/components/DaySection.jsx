import React from 'react';
import { Calendar, MapPin, Car, Plane, Plus, ToggleLeft, ToggleRight } from 'lucide-react';
import ActivityInput from './ActivityInput';
import HotelInput from './HotelInput';
import FlightInput from './FlightInput';

const DaySection = ({
  dayIndex,
  dayData,
  onPlaceChange,
  onCityChange,
  onNumberofpeopleChange,
  onMorningChange,
  onAfternoonChange,
  onNightChange,
  onDateChange,
  onAddActivity,
  onActivityChange,
  onToggleHotel,
  onHotelChange,
  onAddHotel,
  onToggleFlight,
  onFlightChange,
  onAddFlight
}) => {
  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Day {dayIndex + 1}</h2>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={dayData.date}
              onChange={onDateChange}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 hover:bg-white text-lg"
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Place
            </label>
            <div className="relative">
              <input
                placeholder='Place'

                type="text"
                value={dayData.place}
                onChange={onPlaceChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 hover:bg-white text-lg"
              />
            </div>
          </div>
         
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              City
            </label>
            <div className="relative">
              <input
                placeholder='City'
                type="text"
                value={dayData.city}
                onChange={onCityChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 hover:bg-white text-lg"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Number of people
            </label>
            <div className="relative">
              <input
                placeholder='number of people'
                type="number"
                value={dayData.numberofpeople}
                onChange={onNumberofpeopleChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 hover:bg-white text-lg"
              />
            </div>
          </div>
        </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Morning
            </label>
            <div className="relative">
              <input
                placeholder='morning'
                type="text"
                value={dayData.morning}
                onChange={onMorningChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 hover:bg-white text-lg"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Afternoon
            </label>
            <div className="relative">
              <input
                placeholder='afternoon'
                type="text"
                value={dayData.afternoon}
                onChange={onAfternoonChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 hover:bg-white text-lg"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Evening
            </label>
            <div className="relative">
              <input
                placeholder='Evening'
                type="text"
                value={dayData.night}
                onChange={onNightChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 hover:bg-white text-lg"
              />
            </div>
          </div>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-800">Activities</h3>
          </div>


          <div className="space-y-4">
            {dayData.activities.map((activity, i) => (
              <ActivityInput
                key={i}
                activity={activity}
                onChange={(field, value) => onActivityChange(i, field, value)}
              />
            ))}
          </div>

          <button
            onClick={onAddActivity}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            <Plus className="w-4 h-4" />
            Add Activity
          </button>
        </div>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Car className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-800">Hotel</h3>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Is there a Hotel?
            </label>
            <div className="relative">
              <select
                value={dayData.hotelEnabled ? 'yes' : 'no'}
                onChange={(e) => onToggleHotel(e.target.value === 'yes')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color1 focus:border-color1 transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                {dayData.hotelEnabled ? (
                  <ToggleRight className="w-5 h-5 text-color1" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-color1" />
                )}
              </div>
            </div>
          </div>

          {dayData.hotelEnabled && (
            <div className="space-y-4">
              {dayData.hotels?.map((hotel, i) => (
                <HotelInput
                  key={i}
                  hotel={hotel}
                  onChange={(field, value) => onHotelChange(i, field, value)}
                />
              ))}
              <button
                onClick={onAddHotel}
                className="flex items-center gap-2 bg-color1 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-100 shadow-md hover:shadow-lg font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Hotel
              </button>
            </div>
          )}

        </div>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Plane className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Flight</h3>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Is there a flight?
            </label>
            <div className="relative">
              <select
                value={dayData.flightEnabled ? 'yes' : 'no'}
                onChange={(e) => onToggleFlight(e.target.value === 'yes')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                {dayData.flightEnabled ? (
                  <ToggleRight className="w-5 h-5 text-blue-600" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          {dayData.flightEnabled && (
            <div className="space-y-4">
              {dayData.flights?.map((flight, i) => (
                <FlightInput
                  key={i}
                  flight={flight}
                  onChange={(field, value) => onFlightChange(i, field, value)}
                />
              ))}
              <button
                onClick={onAddFlight}
                className="flex items-center gap-2 bg-color1 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-100 shadow-md hover:shadow-lg font-medium"
              >
                <Plus className="w-4 h-4" />
                Add flight
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DaySection;