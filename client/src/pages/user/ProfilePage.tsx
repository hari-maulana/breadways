import { useSelector } from "react-redux";
import EditProfileModal from "../../components/profilePage/EditProfileModal";
import { RootState } from "../../store";
import { TransactionList } from "../../components/transaction/TransactionList";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const ProfilePage = () => {
  const queryClient = useQueryClient();
  const userProfile = useSelector((state: RootState) => state.userProfile);
  /** fetch order data */
  const fetchOrders = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/orders/${userProfile.id}`
    );
    return response.data;
  };

  const { data, isLoading /*, error*/ } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });
  /** fetch order data */
  console.log(userProfile.profile.profilePict);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["transactions"] });
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
      {/* container kiri*/}
      <div>
        <p className="text-2xl font-bold mb-6">My Profile</p>
        <div className="flex flex-row bg-white p-4 rounded-xl ">
          {/* gambar profile */}
          <img
            className=" w-48 h-60 object-cover mr-5 mb-5 rounded bg-slate-200"
            src={
              userProfile
                ? userProfile.profile.profilePict
                : "https://via.placeholder.com/150"
            }
            alt=""
          />
          {/* keterangan profile */}
          <div className="flex flex-col justify-between h-60">
            <div>
              <p className="font-bold">Name</p>
              <p>{userProfile?.fullName}</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>{userProfile?.email}</p>
            </div>
            <div>
              <p className="font-bold">Phone</p>
              <p>{userProfile?.phone}</p>
            </div>
            <div>
              <p className="font-bold">Address</p>
              <p>{userProfile?.profile?.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <EditProfileModal userId={userProfile.id} />
        </div>
      </div>

      {/* container kanan */}
      <div>
        {/* Ongoing Orders */}
        <p className="text-2xl font-bold mb-6">Ongoing Order</p>
        <ul>
          {data
            ?.filter((order: any) => order.status !== "COMPLETED")
            .map((order: any) => (
              <TransactionList
                key={order.id}
                bakeryName={order.bakery.name}
                date={order.createdAt}
                total={order.totalPrice}
                status={order.status}
              />
            ))}
        </ul>

        {/* Completed Orders */}
        <p className="text-2xl font-bold mb-6 mt-10">Order History</p>
        <ul>
          {data
            ?.filter((order: any) => order.status === "COMPLETED")
            .map((order: any) => (
              <TransactionList
                key={order.id}
                bakeryName={order.bakery.name}
                date={order.createdAt}
                total={order.totalPrice}
                status={order.status}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
