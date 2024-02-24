import React from "react";

const register = () => {
  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("uname", e.target.title.value);
    formData.append("shortdescription", e.target.shdes.value);

    axios
      .post(monumentEndpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Monument Created");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="formcon">
      <div className="formcard" style={{ width: "500px" }}>
        <div className="head" style={{ "margin-bottom": "20px" }}>
          Login
        </div>
        <form onSubmit={submit}>
          <div className="inp">
            <label htmlFor="uname">Username</label>
            <input
              name="uname"
              type="text"
              id="uname"
              style={{ width: "300px" }}
            />
          </div>

          <div className="inp">
            <label htmlFor="paswd">Password</label>
            <input
              name="paswd"
              type="password"
              id="paswd"
              style={{ width: "300px" }}
            />
          </div>

          <div className="sub">
            <input type="submit" className="btn" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
