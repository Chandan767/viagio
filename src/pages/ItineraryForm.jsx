import React, { useState } from 'react';
import DaySection from '../components/DaySection';
import { Plus, Calendar, MapPin } from 'lucide-react';
import PdfItineraryContent from '../pdf/PdfItineraryContent';
import DownloadButton from '../pdf/DownloadButton';

const ItineraryForm = () => {
    const [name, setName] = useState('');

    const [days, setDays] = useState(1);
    const [itinerary, setItinerary] = useState([
        {
            date: '',
            name: '',
            activities: [],
            hotelEnabled: false,
            place: '',
            city: '',
            numberofpeople: '',
            morning: '',
            afternoon: '',
            night: '',
            hotels: [{
                type: '',
                time: '',
                price: '',
                people: '',
            }],
            flightEnabled: false,
            flights: [{
                flightNumber: '',
                airline: '',
                departureTime: '',
                price: ''
            }],
        }
    ]);

    const handle_add_day = () => {
        setItinerary([
            ...itinerary,
            {
                date: '',
                activities: [],
                hotelEnabled: false,
                place: '',
                city: '',
                numberofpeople: '',
                morning: '',
                afternoon: '',
                night: '',
                hotels: [{
                    type: '',
                    time: '',
                    price: '',
                    people: '',
                }],
                flightEnabled: false,
                flights: [{
                    flightNumber: '',
                    airline: '',
                    departureTime: '',
                    price: ''
                }],
            }
        ]);
        setDays(days + 1);
    };
    const handle_place_add = (index, value) => {
        const newData = [...itinerary];
        newData[index].place = value;
        setItinerary(newData);
    }
    const handle_city_add = (index, value) => {
        const newData = [...itinerary];
        newData[index].city = value;
        setItinerary(newData);
    }
    const handle_numberofpeople_add = (index, value) => {
        const newData = [...itinerary];
        newData[index].numberofpeople = value;
        setItinerary(newData);
    }
    const handle_morning_add = (index, value) => {
        const newData = [...itinerary];
        newData[index].morning = value;
        setItinerary(newData);
    }
    const handle_afternoon_add = (index, value) => {
        const newData = [...itinerary];
        newData[index].afternoon = value;
        setItinerary(newData);
    }
    const handle_night_add = (index, value) => {
        const newData = [...itinerary];
        newData[index].night = value;
        setItinerary(newData);
    }

    const handle_date_add = (index, value) => {
        const newData = [...itinerary];
        newData[index].date = value;
        setItinerary(newData);
    };

    const handle_activity_add = (dayIndex, activityIndex, field, value) => {
        const newData = [...itinerary];
        newData[dayIndex].activities[activityIndex][field] = value;
        setItinerary(newData);
    };

    const handle_activity_form_add = (dayIndex) => {
        const newData = [...itinerary];
        newData[dayIndex].activities.push({
            id: '',
            name: '',
            description: '',
            price: '',
            time: '',
        });
        setItinerary(newData);
    };

    const handle_hotel = (dayIndex, enabled) => {
        const newData = [...itinerary];
        newData[dayIndex].hotelEnabled = enabled;
        setItinerary(newData);
    };

    const handle_hotel_add = (dayIndex, hotelIndex, field, value) => {
        const newData = [...itinerary];
        newData[dayIndex].hotels[hotelIndex][field] = value;
        setItinerary(newData);
    };

    const handle_hotel_form_add = (dayIndex) => {
        const newData = [...itinerary];
        newData[dayIndex].hotels.push({
            type: '',
            time: '',
            price: '',
            people: '',
        });
        setItinerary(newData);
    };
    const handle_flight_form_add = (dayIndex) => {
        const newData = [...itinerary];
        newData[dayIndex].flights.push({
            flightNumber: '',
            airline: '',
            departureTime: '',
            price: ''
        });
        setItinerary(newData);
    };


    const handle_flight = (dayIndex, enabled) => {
        const newData = [...itinerary];
        newData[dayIndex].flightEnabled = enabled;
        setItinerary(newData);
    };

    const handle_flight_add = (dayIndex, flightIndex, field, value) => {
        const newData = [...itinerary];
        newData[dayIndex].flights[flightIndex][field] = value;
        setItinerary(newData);
    };

    return (
        <div className="min-h-screen  bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 bg-gradient-to-r from-color2 to-color3 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold mb-4 bg-color1 bg-clip-text text-transparent p-2">
                            Itinerary Builder
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Enter trip details below. Use the add buttons to extend activities or flight options per day.
                        </p>
                    </div>
                    <div className="flex justify-center mb-8">
                        <button
                            onClick={handle_add_day}
                            className="group bg-color1 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3"
                        >
                            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
                            Add Another Day
                            <Calendar className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="max-w-md mx-auto mb-10">
                        <label htmlFor="traveler-name" className="block text-lg font-semibold text-gray-700 mb-2">
                            Traveler Name
                        </label>
                        <input
                            id="traveler-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-color1 focus:border-transparent transition duration-300 text-gray-800 text-base"
                        />
                    </div>
                    <div className="space-y-8">
                        {itinerary.map((day, index) => (
                            <DaySection
                                key={index}
                                dayIndex={index}
                                dayData={day}
                                onDateChange={(e) => handle_date_add(index, e.target.value)}
                                onPlaceChange={(e) => handle_place_add(index, e.target.value)}
                                onCityChange={(e) => handle_city_add(index, e.target.value)}
                                onNumberofpeopleChange={(e) => handle_numberofpeople_add(index, e.target.value)}
                                onMorningChange={(e) => handle_morning_add(index, e.target.value)}
                                onAfternoonChange={(e) => handle_afternoon_add(index, e.target.value)}
                                onNightChange={(e) => handle_night_add(index, e.target.value)}
                                // onActivityCountChange={(count) => handleActivityCountChange(index, count)}
                                onAddActivity={() => handle_activity_form_add(index)}
                                onActivityChange={(activityIndex, field, value) => handle_activity_add(index, activityIndex, field, value)}
                                onToggleHotel={(enabled) => handle_hotel(index, enabled)}
                                onHotelChange={(hotelIndex, field, value) => handle_hotel_add(index, hotelIndex, field, value)}
                                onAddHotel={() => handle_hotel_form_add(index)}
                                onAddFlight={() => handle_flight_form_add(index)}

                                onToggleFlight={(enabled) => handle_flight(index, enabled)}
                                onFlightChange={(flightIndex, field, value) => handle_flight_add(index, flightIndex, field, value)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-12">
                        <div className=" justify-center mt-12">
                            <div className='pb-4'
                            >
                            </div>
                            <div >
                                   <PdfItineraryContent itinerary={itinerary} name={name} />
                            </div>
                         
                            <DownloadButton />


                        </div>

                    </div>
                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Your itinerary will be generated as a professional PDF document
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItineraryForm;