'use client'
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalApi from "../../../_services/GlobalApi";
import { useSession } from "next-auth/react";
import { toast } from "sonner"


const BookingSection = ({ children, business }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const { data } = useSession();
  useEffect(() => {
    getTime();
  }, []);
  // time slot

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeSlot(timeList);
  };

//   const saveBooking = () => {
//     GlobalApi.createNewBooking(
//       business.id,
//       date,
//       selectedTime,
//       data.user.name,
//       data.user.email
//     ).then(
//       (resp) => {
//         console.log(resp);
//         if (resp) {
//           // ToastMsg
//           toast("Service Booked Successfully");
//         }
//       },
//       (e) => {
//         toast("Error while creating a booking");
//       }
//     );
//   }; 

const saveBooking=()=>{
    GlobalApi.createNewBooking(business.id,
        date,selectedTime,data.user.email,data.user.name)
        .then(resp=>{
            console.log(resp);
            if(resp)
            {
                setDate();
                setSelectedTime('');
                toast('Service Booked successfully!')
                // Toast Msg 
            }
        },(e)=>{
            toast('Error while creating booking')
            //Error Toast Msg
        })
}

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto ">
          <SheetHeader>
            <SheetTitle>Book a service</SheetTitle>
            <SheetDescription>
              Select Date and Time slot to book an service.
              <div className="flex flex-col gap-5 items-baseline pt-4 ">
                <h2 className="font-bold text-start">Select Date</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border "
                />
              </div>
              {/* Time Slot */}
              <h2 className="my-5 font-bold">Select time-slot</h2>
              <div className="grid grid-cols-3 gap-3 ">
                {timeSlot.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedTime(item.time)}
                    variant="outline"
                    className={`border rounded-full p-2 px-3 hover:bg-primary hover:text-white ${
                      selectedTime == item.time && "bg-primary text-white"
                    } `}
                  >
                    {item.time}
                  </Button>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>{" "}
          <SheetFooter className={"mt-5"}>
            <SheetClose asChild>
              <div className="flex gap-4">
                <Button type="" variant="destructive">
                  Cancel
                </Button>
                <Button
                  type=""
                  disabled={!(selectedTime && date)}
                  onClick={() => saveBooking()}
                >
                  Book Now
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BookingSection;
