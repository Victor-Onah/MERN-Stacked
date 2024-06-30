import sendMessage from "./send-message";

function validateForm(setMessage) {
  const email = document.querySelector("#email"),
    name = document.querySelector("#name"),
    body = document.querySelector("#body");

  setMessage({ isError: false, body: "" });

  if (
    !/^[a-zA-ZàáâäãåāèéêëēėęîïíīįìôöòóœøōõûüùúūÿýçćčñńßśšžźżÀÁÂÄÃÅĀÈÉÊËĒĖĘÎÏÍĪĮÌÔÖÒÓŒØŌÕÛÜÙÚŪŸÝÇĆČÑŃßŚŠŽŹŻ\s'-]+$/.test(
      name.value.trim()
    )
  )
    return (
      setMessage({ isError: true, body: "Use a real name!" }),
      name.focus(),
      false
    );
  if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())
  )
    return (
      setMessage({ isError: true, body: "Use a valid email address!" }),
      email.focus(),
      false
    );

  if (!body.value.trim())
    return (
      setMessage({ isError: true, body: "Message body cannot be empty!" }),
      body.focus(),
      false
    );
  return setMessage({ isError: false, body: "" }), true;
}

export default async function validateBeforeSubmit(formData, setMessage) {
  if (validateForm(setMessage)) {
    try {
      const res = await sendMessage(formData);
      if (res.status === "successful") {
        setMessage({
          isError: false,
          body: "Your message was sent successfuly! You'll be contacted soon.",
        });
        document.forms["contact-form"].reset();
        setTimeout(
          () =>
            setMessage({
              isError: false,
              body: "",
            }),
          5000
        );
      } else {
        setMessage({
          isError: false,
          body: res.message,
        });
        setTimeout(
          () =>
            setMessage({
              isError: false,
              body: "",
            }),
          5000
        );
      }
    } catch (error) {
      setMessage({
        isError: true,
        body: error.message,
      });
    }
  }
}
