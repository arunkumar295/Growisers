document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    var form = document.getElementById("contact-us");
    var formData = new FormData(form);

    // Extract form data
    var firstName = formData.get("firstname");
    var lastName = formData.get("lastname");
    var phone = formData.get("phone");
    var email = formData.get("email");
    var message = formData.get("message");

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "growisersexim@gmail.com",
      Password: "1FFA1DD7A9D4C21D83A9AB0EE62CC4D96063",
      To: "info@growisers.com",
      From: "growisersexim@gmail.com",
      Subject: "New form submisssion detials",
      Body: `Firstname: ${firstName}<br>Lastname:${lastName}<br>Phone:${phone}<br>Email: ${email}<br>Message: ${message}`,
    }).then(console.log("admin mail sent"));
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "growisersexim@gmail.com",
      Password: "1FFA1DD7A9D4C21D83A9AB0EE62CC4D96063",
      To: email,
      From: "growisersexim@gmail.com",
      Subject: "Thankyou for showing interest on us!",
      Body: `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#f9f9f9" id="bodyTable">
      <tbody>
      <tr>
        <td style="padding-top:20px;padding-bottom:20px" align="center" valign="top"></tr></td>
          <tr>
              <td style="padding-right:10px;padding-left:10px;" align="center" valign="top" id="bodyCell">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperBody" style="max-width:500px">
                      <tbody>
                          <tr>
                              <td align="center" valign="top">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableCard" style="background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;">
                                      <tbody>
                                          <tr>
                                              <td style="background-color:#2dcd73;font-size:1px;line-height:3px" class="topBorder" height="3">&nbsp;</td>
                                          </tr>
                                          <tr>
                                              <td style="padding-bottom: 5px; padding-top:20px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="mainTitle">
                          <img src="http://growisers.com/assets/img/logo/growisers-colorlogo.png" style="width:50%; margin-botttom:22rem;"/><br><br><br><br>
                                                  <h2 class="text" style="color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0">Dear ${firstName}</h2>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="padding-bottom: 30px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="subTitle">
                                                  <h4 class="text" style="font-family:Poppins,Helvetica,Arial,sans-serif;font-size:16px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:24px;text-transform:none;text-align:center;margin:0; padding :2rem;">Thank you for submitting the form. Your information has been received, and we'll get back to you soon!
  </h4>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="padding-left:20px;padding-right:20px" align="center" valign="top" class="containtTable ui-sortable">
                                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableDescription" style="">
                                                      <tbody>
                                                          <tr>
                                                              <td style="padding-bottom: 20px;" align="center" valign="top" class="description">
                                                                  <p class="text" style="color:#666;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0">Why <a href="http://growisers.com/" style="text-decoration: auto;font-size: 16px;font-weight: 600;color: #175CFF;">Growisers</a>
                                                                  Discover pure excellence with our premium coconut oil exports. We source the finest coconuts, extract the best oil, and deliver nature's goodness to your doorstep. Elevate your wellness and culinary experiences with our quality coconut oil.
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="font-size:1px;line-height:1px" height="20">&nbsp;</td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
                                      <tbody>
                                          <tr>
                                              <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperFooter" style="max-width:600px">
                      <tbody>
                          <tr>
                              <td align="center" valign="top">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer">
                                      <tbody>
                                          <tr>
                                              <td style="padding: 0px 10px 10px;" align="center" valign="top" class="footerEmailInfo">
                                                  <p class="text" style="color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0">If you have any questions please contact us <a href="mailto:info@spritle.com" style="color:#bbb;text-decoration:underline" target="_blank">info@spritle.com</a>
                                                      </p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
      </tbody>
  </table>`,
    }).then(function () {
      console.log("Client thank you mail sent");
      form.reset();
      window.location.href = "thankyou-page.html";
    });
  });
