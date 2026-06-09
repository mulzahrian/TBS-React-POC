export const vehicleFields = [
    {
        label: "Vehicle Code",
        name: "vehicle_code",
        type: "text",
        placeholder: "Input vehicle code",
    },
    {
        label: "Vehicle Number",
        name: "vehicle_number",
        type: "text",
        placeholder: "Input vehicle number",
    },
    {
        label: "Vehicle Type",
        name: "vehicle_type",
        type: "select",
        options: [
            { label: "Bus", value: "BUS" },
            { label: "Station", value: "STATION" },
            { label: "Hi-Ace", value: "HI-ACE" },
        ],
    },
];
