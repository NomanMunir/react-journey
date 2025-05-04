import { cartActoins } from "./cart";
import { uiActions } from "./ui";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-demo-a5619-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) throw new Error("Unable to fetch cart data!");
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(
        cartActoins.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Unable to fetch Cart Data!.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pendding",
        title: "Sending",
        message: "Sending Cart Data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-demo-a5619-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart Data Send Successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending Cart Data Failed!.",
        })
      );
    }
  };
};
