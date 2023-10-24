function arun(e) {
  e.preventDefault();
  console.log("arun");
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "growisersexim@gmail.com",
    Password: "growisers@123",
    To: "meenaarun295@gmail.com",
    From: "growisersexim@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
