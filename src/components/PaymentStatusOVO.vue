<template>
  <div class="container wrapp">
    <div class="data">
      <div class="row">
        <div class="col-md-6 my-3">
          <div class="card shadow bordershadow p-3 mt-4">
            <span class="method-text">QR Code</span>
            <div class="card p-3" id="card-summary-wrap">
              <div class="qrcode-container">
                <div class="form-group col-md-12">
                  <label class="my-2">Enter Registered Number</label>
                  <input
                    type="text"
                    class="form-control input-reg"
                    value="0812 - 3456 -8901"
                  />
                </div>
              </div>
            </div>
            <p class="method-text">Payment Instructions</p>
            <span class="text-status-qr">
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quam id aliquet amet sed cras massa laoreet nisl. Ut adipiscing
              tempor, urna in leo quis mauris ut. Sed dolor egestas iaculis
              tincidunt. Sed mattis suspendisse nam lacus tristique facilisis
              neque, porttitor id.
            </span>
          </div>
        </div>
        <div class="col-md-6 my-3">
          <div class="card shadow bordershadow p-3 mt-4">
            <span class="method-text">Payment Status</span>
            <div class="card p-3" id="card-summary-wrap">
              <div class="row card-summary">
                <div class="col-md-6"><div class="status">Pending</div></div>
                <div class="col-md-6 text-amount text-end">
                  <button class="btn cek-status">Cek status</button>
                </div>
              </div>
              <div class="row card-summary">
                <div class="col-md-6">Merchant Name</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="text-amount">Taman Wisata Candi</div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-6">Booking Number</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="text-amount">OtQFxNj76E</div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-6">Payment Number</div>
                <div class="col-md-6 text-amount text-end"></div>
              </div>
              <div class="row card-summary mt-2">
                <div class="text-amount">01-08-2022 23:40:00</div>
              </div>
            </div>
            <span class="method-text">Order Summary</span>
            <div class="card p-3" id="card-summary-wrap">
              <div class="row card-summary">
                <div class="col-md-4">Visit Date</div>
                <div class="col-md-4 text-center"></div>
                <div class="col-md-4 text-amount text-end">02-08-2022</div>
              </div>
              <div class="row card-summary">
                <div class="col-md-4">Booking Number</div>
                <div class="col-md-4 text-center"></div>
                <div class="col-md-4 text-amount text-end">QXy201X0</div>
              </div>
            </div>
            <div class="card p-3" id="card-summary-wrap">
              <div class="row card-summary">
                <div class="col-md-4">Tiket perorangan TMII</div>
                <div class="col-md-4 text-center">5x</div>
                <div class="col-md-4 text-amount text-end">Rp 250.000</div>
              </div>
              <div class="row card-summary">
                <div class="col-md-4">Tiket Mobil</div>
                <div class="col-md-4 text-center">1x</div>
                <div class="col-md-4 text-amount text-end">Rp 40.000</div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-4">Total</div>
                <div class="col-md-4 text-center">1x</div>
                <div class="col-md-4 text-amount text-end">Rp 40.000</div>
              </div>
              <div class="row card-summary">
                <div class="col-md-6">
                  Voucher <span class="disc">(Disc 10%)</span>
                </div>
                <div class="col-md-6 text-amount text-end">
                  <span class="disc">- Rp 30.000</span>
                </div>
              </div>
              <hr />
              <div class="row card-summary">
                <div class="col-md-4">
                  <span class="text-amount">Total Payment</span>
                </div>
                <div class="col-md-4 text-center"></div>
                <div class="col-md-4 text-amount text-end">
                  <span class="text-payment2">- Rp 240.000</span>
                </div>
              </div>
            </div>
            <button class="btn btn-primary button-back">
              Back to Aplication
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.wrapp {
  padding-top: 50px;
  background: #f0f2f3;
}
.payment {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.method-text {
  color: #0b5d6f;
  font-size: 32px;
}
#title-accordion .button-accord-status {
  background: none !important;
  color: #0b5d6f !important;
  font-weight: 500;
  padding-left: 0;
  padding-right: 0;
}
.fontawesome-size {
  width: 9px;
  color: red !important;
}
.qris-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.img-qris {
  width: 244px;
  height: 244px;
}
.text-payment {
  font-size: 20px;
  color: #757575;
}
.text-payment2 {
  font-size: 24px;
  color: #0b5d6f;
}
.img-payment svg {
  color: white;
}
.accordion {
  margin-bottom: 30px;
}
#card-summary-wrap {
  margin: 10px 0;
  background: #f9fafa;
  border: #e6e6e6 1px solid;
  color: #757575;
}
.card-summary {
  margin: 5px 0;
}
.text-amount {
  font-weight: 600;
  color: #0b5d6f;
}
.disc {
  color: #00b9bc;
  font-weight: 600;
}
.check {
  padding: 10px;
}
.policy {
  display: flex;
  align-content: center;
  align-items: center;
  color: #757575;
}
.policy-text {
  margin-left: 10px;
}
.policy-text-2 {
  color: #0b5d6f;
  font-weight: 700;
}
.accordion-header-status {
  margin-bottom: 0;
  margin-left: 20px;
  margin-right: 20px;
}
.text-status-qr {
  text-align: justify;
  border: 1.5px solid #ececec;
  padding: 10px 20px 10px 20px;
  color: #757575;
  border-radius: 5px;
}
#accordionExample .accordion-button:after,
#accordionExample2 .accordion-button:after,
#accordionExample3 .accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23757575'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}
.status {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  background: #ffb200;
  color: #ffff;
  border-radius: 30px;
}
.bordershadow .button-back {
  border-radius: 30px;
  font-weight: bold;
}
.qrcode-container {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
input.input-reg {
  background: none;
  color: #757575;
}
</style>
<script>
export default {
  name: "PaymentStatusOvo",
  props: {
    msg: String,
  },
};
</script>
