interface TransactionListProps {
  bakeryName: string;
  date: string;
  total: number;
  status: string;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  bakeryName,
  date,
  total,
  status,
}) => {
  return (
    <div>
      {/* hitory list */}

      <ul>
        <li className="flex flex-row justify-between border-b-2 border-gray-500 py-2 gap-24 bg-white p-4 rounded-xl mb-2">
          {/* keterangan */}
          <div>
            <p className="font-bold">{bakeryName}</p>
            <small>
              {new Date(date).toLocaleDateString("id", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </small>
            <p className="font-bold">Total: Rp. {total}</p>
          </div>
          {/* status dan logo */}
          <div className="flex flex-col items-center justify-between">
            <img
              className="w-25 h-10 object-contain rounded"
              src="https://res.cloudinary.com/circlehmhm/image/upload/v1729191371/Bread_House_Bakery_Logo_1600_x_300_px_1600_x_200_px_1600_x_240_px_2_hyps46.svg"
              alt="logo"
            />
            {status !== "COMPLETED" ? (
              <p className="text-orange-500 font-bold">{status}</p>
            ) : (
              <p className="text-green-500 font-bold">{status}</p>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};
