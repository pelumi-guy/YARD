import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

// import Header from "parts/Header";
import Button from "../elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "../elements/Stepper";

import BookingInformation from "./components/BookingInformation";
import Payment from "./components/Payment";
import Completed from "./components/Completed";

// import { submitBooking } from "store/actions/checkout";
import PropTypes from "prop-types";
import axiosInstance from "../../services/apiService";


const submitBooking = () => {
  console.log("Submiting booking...");
}

const processToPayment = async () => {
  // setLoadingPayment(true);

  const totalPrice = sessionStorage.getItem("total");
  const email = localStorage.getItem("email");

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const { data } = await axiosInstance.post(
    "/api/Payment/process",
    { amount: Math.ceil(totalPrice * 100), email },
    config
  );

  const paymentPage = data.data.authorization_url;

  console.log({ paymentPage });

  // window.location.replace(paymentPage);
  window.location.href = paymentPage;
};

class CheckoutSuccess extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    // payload.append("bankId", checkout.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;
    // const { checkout, page } = this.props;
    const checkout = {
      duration: 2
    }
    const x = 1;
    // console.log(page, data);
    // if (!checkout)
    if (x !== 1)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-3">
              Pilih kamar dulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  // onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            // ItemDetails={page[checkout._id]}
            ItemDetails={1}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            // ItemDetails={page[checkout._id]}
            ItemDetails={1}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        {/* <Header isCentered /> */}

        <Stepper steps={steps} initialStep="completed">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {
                    // data.firstName !== "" &&
                    // data.lastName !== "" &&
                    // data.email !== "" &&
                    // data.phone !== "" &&
                    (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={processToPayment}
                        >
                          Continue to Payment
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    // href={`/properties/${checkout._id}`}
                    href={"#!"}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn p-3"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href="/"
                    style={{ textDecoration: "none" }}
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

CheckoutSuccess.propTypes = {
  checkout: PropTypes.object,
  submitBooking: PropTypes.func,
  page: PropTypes.object
}

// export default connect(mapStateToProps, { submitBooking })(Checkout);
export default CheckoutSuccess;
