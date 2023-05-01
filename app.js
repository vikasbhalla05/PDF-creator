import express from "express";
import pdfService from "./service/pdf-service.js";

const app = express();
const port = 3000;

app.get("/invoice", async (req, res) => {
  try {
    const stream = res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment;filename=invoice.pdf",
    });

    await pdfService.buildPDF(stream);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

let bookingData = {
  _id: {
    $oid: "643f84042b9e5ce971a3d703",
  },
  vehicle_id: {
    $oid: "643001f96148a97ff8e9e597",
  },
  tenant_id: {
    $oid: "6433e45834157e8115e38e87",
  },
  host_id: {
    $oid: "6433e45834157e8115e38e87",
  },
  status: "cancelled",
  cancelled_by: {
    $oid: "6433e45834157e8115e38e87",
  },
  cancelled_at: {
    $date: "2023-04-21T03:26:01.000Z",
  },
  checkin_date: {
    $date: "2023-12-24T18:30:00.000Z",
  },
  checkout_date: {
    $date: "2024-01-13T18:30:00.000Z",
  },
  pickup_location: "Oslo Norway",
  payment_method: "visa",
  addons: [
    {
      name: "Soccer ball",
      price: 3000,
      quantity: 1,
      _id: {
        $oid: "643f83ee2b9e5ce971a3d6f6",
      },
    },
    {
      name: "Racket and Tennis Ball",
      price: 2000,
      quantity: 1,
      _id: {
        $oid: "643f83ee2b9e5ce971a3d6f5",
      },
    },
    {
      name: "Table Tennis kit",
      price: 1000,
      quantity: 1,
      _id: {
        $oid: "643f83ee2b9e5ce971a3d6f4",
      },
    },
  ],
  is_host_insured: null,
  insurance_details: {
    no_of_days: null,
    cost_per_day: null,
  },
  rental_amount: 39669,
  addon_amount: 6000,
  insurance_amount: null,
  host_service_fee: null,
  tenant_service_fee: null,
  deposits: null,
  deposits_locked: null,
  deposited_at: null,
  deposits_lockin_expiry_date: null,
  deposits_release_date: null,
  deposits_release_amount: null,
  deposits_date: null,
  payouts_made_date: null,
  payouts_received_date: null,
  stripe_charges: null,
  total_cost: 53602,
  total_extra_cost: 0,
  checkin_process_triggered: false,
  checkin_process_triggered_date: null,
  checkin_process_completed: false,
  checkin_process_completed_date: null,
  checkout_process_triggered: false,
  checkout_process_triggered_date: null,
  checkout_process_completed: false,
  checkout_process_completed_date: null,
  notes: null,
  kilometers_included_per_day: null,
  created_at: {
    $date: "2023-04-19T06:02:44.409Z",
  },
  final_settlements: [],
  __v: 0,
};
