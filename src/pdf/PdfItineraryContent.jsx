import React from 'react';

const PdfItineraryContent = ({ itinerary, name }) => {
  const transformItineraryToTripData = (itinerary) => {
    return {
      greeting: `Hi, ${name}`,
      title: itinerary[0].place,
      subtitle: `${itinerary.length} Days ${itinerary.length - 1} Nights`,
      departure: {
        from: "Bangalore",
        date: itinerary[0].date,
        arrival: itinerary[0].date,
        destination: itinerary[0].place,
        travelers: itinerary[0].numberofpeople
      },
      days: itinerary?.map((day, index) => ({
        day: index + 2,
        date: day.date || `Day ${index + 1}`,
        subtitle: `${day.place || 'City'} Exploration`,
        activities: [
          {
            time: 'Morning',
            title: day.morning || 'Morning Activity',
            details: []
          },
          {
            time: 'Afternoon',
            title: day.afternoon || 'Afternoon Activity',
            details: []
          },
          {
            time: 'Evening',
            title: day.night || 'Evening Activity',
            details: []
          }
        ].filter(activity => activity.title && activity.title !== 'Morning Activity' && activity.title !== 'Afternoon Activity' && activity.title !== 'Evening Activity')
      })) || [],



      flights: itinerary?.flatMap(day =>
        day.flightEnabled && day.flights?.length > 0
          ? day.flights.map(flight => ({
            date: day.date || "Date TBD",
            airline: flight.airline || "Airline TBD",
            route: `Flight ${flight.flightNumber || 'TBD'} - ${flight.departureTime || 'Time TBD'}`,
            price: flight.price || 'Price TBD'
          }))
          : []
      ) || [],

      hotels: itinerary?.flatMap(day =>
        day.hotelEnabled && day.hotels?.length > 0
          ? day.hotels.map(hotel => ({
            city: day.city || "City TBD",
            checkIn: day.date || "Date TBD",
            checkOut: day.date || "Date TBD",
            nights: 1,
            name: hotel.type || "Hotel TBD",
            price: hotel.price || "Price TBD",
            people: hotel.people || day.numberofpeople || "1"
          }))
          : []
      ) || [],




      importantNotes: [
        {
          point: "Airlines Standard Policy",
          details: "In Case Of Visa Rejection, Visa Fees & Any Other Non Cancellable Component Charges Will Be Deducted At Any Cost."
        },
        {
          point: "Flight/Hotel Cancellation",
          details: "In Case Of Visa Rejection, Visa Fees & Any Other Non Cancellable Component Charges Will Be Deducted At Any Cost."
        },
        {
          point: "Trip Insurance",
          details: "In Case Of Visa Rejection, Visa Fees & Any Other Non Cancellable Component Charges Will Be Deducted At Any Cost."
        },
        {
          point: "Hotel Check-in & Check Out",
          details: "In Case Of Visa Rejection, Visa Fees & Any Other Non Cancellable Component Charges Will Be Deducted At Any Cost."
        },
        {
          point: "Visa Rejection",
          details: "In Case Of Visa Rejection, Visa Fees & Any Other Non Cancellable Component Charges Will Be Deducted At Any Cost."
        }
      ],


      services: [
        { service: "Flight Tickets And Hotel Vouchers", details: "Delivered 3 Days Post Full Payment" },
        { service: "Visa Check In", details: "Boarding Pass Delivery Via Email/Whatsapp" },
        { service: "Support", details: "Chat Support - Response Time: 4 Hours" },
        { service: "Cancellation Support", details: "Provided" },
        { service: "Trip Support", details: "Response Time: 1-5 Minutes" }
      ],


      inclusions: [
        {
          category: "Flight",
          count: itinerary?.reduce((acc, day) => {
            if (day.flightEnabled && Array.isArray(day.flights)) {
              return acc + day.flights.length;
            }
            return acc;
          }, 0) || 0,
          details: "All Flights Mentioned",
          status: "Awaiting Confirmation"
        },
        {
          category: "Hotel",
          count: itinerary?.reduce((acc, day) => {
            if (day.hotelEnabled && Array.isArray(day.hotels)) {
              return acc + day.hotels.length;
            }
            return acc;
          }, 0) || 0,
          details: "All Hotels Mentioned",
          status: "Included"
        },
        {
          category: "Activities",
          count: itinerary?.reduce((acc, day) => {
            return acc + (Array.isArray(day.activities) ? day.activities.length : 0);
          }, 0) || 0,
          details: "As Per Itinerary",
          status: "Included"
        }
      ],


      activities: itinerary?.flatMap(day =>
        day.activities?.length > 0
          ? day.activities.map(activitie => ({
            city: day.city,
            activity: activitie.description,
            type: activitie.name,
            time: activitie.time,
          }))
          : []
      ) || [],



      payment: {
        total: "₹ 9,00,000 For 1 Pax (Inclusive Of GST)",
        tcs: "Not Collected",
        installments: [
          { name: "Installment 1", amount: "₹12,000", due: "Initial Payment" },
          { name: "Installment 2", amount: "₹40,000", due: "Post Visa Approval" },
          { name: "Installment 3", amount: "Remaining", due: "20 Days Before Departure" }
        ]
      },
      visa: {
        type: "Tourist",
        validity: "30 Days",
        processing: "14/06/2025"
      }
    };
  };

  const tripData = transformItineraryToTripData(itinerary);

  return (
    <div id='pdf-content' className="bg-white text-gray-800 max-w-4xl mx-auto font-sans">
      <div className="text-center py-6 mb-3.5">
        <div className="flex items-center justify-center mb-4">
          {/* <span className="text-3xl font-bold text-gray-700">vigovia</span> */}
          <img width={300} src="/logo.svg" alt="" />
        </div>
        {/* <div className="text-xs text-gray-500 -mt-2">PLAN.PACK.GO!</div> */}
      </div>

      <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 text-white rounded-lg p-6 mb-6">
        <div className="text-center">
          <h2 className="text-lg font-medium mb-1">{tripData.greeting}</h2>
          <h1 className="text-2xl font-bold mb-2">{tripData.title}</h1>
          <p className="text-lg mb-4">{tripData.subtitle}</p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>✈</span>
            <span>🏨</span>
            <span>🚗</span>
            <span>📱</span>
          </div>
        </div>
      </div>
      

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-5 gap-4 text-sm">
          <div>
            <div className="font-semibold text-gray-700 mb-1">Departure From</div>
            <div>{tripData.departure.from}</div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-1">Departure</div>
            <div>{tripData.departure.date}</div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-1">Arrival</div>
            <div>{tripData.departure.arrival}</div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-1">Destination</div>
            <div>{tripData.departure.destination}</div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-1">No. Of Travellers</div>
            <div>{tripData.departure.travelers}</div>
          </div>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {tripData.days.map((day, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex">
              <div className="bg-purple-800 text-white flex flex-col items-center justify-center min-w-[60px] relative">
                <div
                  className="text-white font-bold text-sm tracking-wider"
                  style={{
                    padding: '20px 0'
                  }}
                >
                  DAY {day.day}
                </div>
              </div>

              <div className="flex-1 p-4 bg-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{day.date}</h3>
                    <p className="text-gray-600 text-sm">{day.subtitle}</p>
                  </div>
                </div>

                <div className="relative">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-start mb-6 last:mb-0">
                      <div className="flex flex-col items-center mr-6 mt-1">
                        <div className="w-3 h-3 border-2 border-blue-500 bg-white rounded-full z-10"></div>
                        {actIndex < day.activities.length - 1 && (
                          <div className="w-0.5 h-12 bg-blue-500 mt-1"></div>
                        )}
                      </div>

                      <div className="flex-1 -mt-1">
                        <div className="flex items-start mb-2">
                          <span className="text-blue-600 font-semibold text-sm mr-4 min-w-[80px]">
                            {activity.time}
                          </span>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 mb-1">{activity.title}</h4>
                            {activity.details.length > 0 && (
                              <ul className="text-sm text-gray-600 space-y-1">
                                {activity.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="flex items-start">
                                    <span className="text-gray-400 mr-2 mt-1">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Flight <span className="text-purple-600">Summary</span>
        </h3>
        <div className="space-y-2">
          {tripData.flights.map((flight, index) => (
            <div key={index} className="flex items-center bg-purple-50 rounded-lg p-3 border border-purple-100">
              <div className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                {flight.date}
              </div>
              <div className="flex-1">
                <span className="font-semibold text-purple-600">{flight.airline}</span>
                <span className="text-gray-600 ml-2">{flight.route}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: All Flights Include Meals, Seat Choice (Excluding XL), And Chargeable Checked Baggage
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Hotel <span className="text-purple-600">Bookings</span>
        </h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="bg-purple-800 text-white">
            <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium">
              <div>City</div>
              <div>Check In</div>
              <div>Check Out</div>
              <div>Nights</div>
              <div>Hotel Name</div>
            </div>
          </div>
          <div className="bg-white">
            {tripData.hotels.map((hotel, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 p-3 text-sm border-b border-gray-100 last:border-b-0">
                <div>{hotel.city}</div>
                <div>{hotel.checkIn}</div>
                <div>{hotel.checkOut}</div>
                <div>{hotel.nights}</div>
                <div className="text-purple-600 font-medium">{hotel.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2 space-y-1">
          <p>1. All Hotels are Mentioned as per the Request With Similar</p>
          <p>2. Breakfast Included for All Adult Pax</p>
          <p>3. All Hotel Visit For 4+ And Above Category</p>
          <p>4. Negative reviews of hotels are not allowed in most cases</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Important <span className="text-purple-600">Notes</span>
        </h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="bg-purple-800 text-white">
            <div className="grid grid-cols-2 gap-4 p-3 text-sm font-medium">
              <div>Point</div>
              <div>Details</div>
            </div>
          </div>
          <div className="bg-white">
            {tripData.importantNotes.map((note, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 p-3 text-sm border-b border-gray-100 last:border-b-0">
                <div className="font-medium">{note.point}</div>
                <div className="text-gray-600">{note.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Scope Of <span className="text-purple-600">Service</span>
        </h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="bg-purple-800 text-white">
            <div className="grid grid-cols-2 gap-4 p-3 text-sm font-medium">
              <div>Service</div>
              <div>Details</div>
            </div>
          </div>
          <div className="bg-white">
            {tripData.services.map((service, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 p-3 text-sm border-b border-gray-100 last:border-b-0">
                <div className="font-medium">{service.service}</div>
                <div className="text-gray-600">{service.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Inclusion <span className="text-purple-600">Summary</span>
        </h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="bg-purple-800 text-white">
            <div className="grid grid-cols-4 gap-4 p-3 text-sm font-medium">
              <div>Category</div>
              <div>Count</div>
              <div>Details</div>
              <div>Status / Comments</div>
            </div>
          </div>
          <div className="bg-white">
            {tripData.inclusions.map((inclusion, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-3 text-sm border-b border-gray-100 last:border-b-0">
                <div className="font-medium">{inclusion.category}</div>
                <div>{inclusion.count}</div>
                <div className="text-gray-600">{inclusion.details}</div>
                <div className="text-orange-600">{inclusion.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Activity <span className="text-purple-600">Table</span>
        </h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="bg-purple-800 text-white">
            <div className="grid grid-cols-4 gap-4 p-3 text-sm font-medium">
              <div>City</div>
              <div>Activity</div>
              <div>Type</div>
              <div>Time Required</div>
            </div>
          </div>
          <div className="bg-white">
            {tripData.activities.map((activity, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-3 text-sm border-b border-gray-100 last:border-b-0">
                <div>{activity.city}</div>
                <div>{activity.activity}</div>
                <div>{activity.type}</div>
                <div>{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">
          Terms and <span className="text-purple-600">Conditions</span>
        </h3>
        <div className="text-blue-600 text-sm mb-4">
          <a href="#" className="underline">View all terms and conditions</a>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Payment Plan</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-100 rounded-lg p-3">
            <div className="text-sm text-gray-600">Total Amount</div>
            <div className="font-bold text-lg">{tripData.payment.total}</div>
          </div>
          <div className="bg-purple-100 rounded-lg p-3">
            <div className="text-sm text-gray-600">TCS</div>
            <div className="font-bold text-lg">{tripData.payment.tcs}</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="bg-purple-800 text-white">
            <div className="grid grid-cols-3 gap-4 p-3 text-sm font-medium">
              <div>Installment</div>
              <div>Amount</div>
              <div>Due Date</div>
            </div>
          </div>
          <div className="bg-white">
            {tripData.payment.installments.map((installment, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-3 text-sm border-b border-gray-100 last:border-b-0">
                <div>{installment.name}</div>
                <div className="font-semibold">{installment.amount}</div>
                <div>{installment.due}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Visa Details</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold text-gray-700">Visa Type :</div>
              <div>{tripData.visa.type}</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Validity:</div>
              <div>{tripData.visa.validity}</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Processing Date :</div>
              <div>{tripData.visa.processing}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">PLAN.PACK.GO!</h2>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
          Book Now
        </button>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="font-semibold">Vigovia Tech Pvt. Ltd</div>
            <div>Registered Office: Flat 109 Chinmani Hills,</div>
            <div className='mb-1'>Lulla Business Park, Karnataka, India</div>
          </div>
          <div className="text-sm text-gray-600">
            <div><span className="font-semibold">Phone:</span> +91 9999999999</div>
            <div><span className="font-semibold">Email ID:</span> Contact@Vigovia.Com</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-700">vigovia</div>
            <div className="text-xs text-gray-500">PLAN.PACK.GO!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfItineraryContent;