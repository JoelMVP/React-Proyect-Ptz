import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://scontent.flpb2-2.fna.fbcdn.net/v/t1.0-9/117530101_3208360825945013_7290197313031519962_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=Zd56Y3x29ggAX8-0uTq&_nc_oc=AQmx4a4g1iT_05-pBJXfLQ4CrYBAwmYAKlHfnp9Mk91fTWH1Kg-ZA-OTII-VrEntP0s&_nc_ht=scontent.flpb2-2.fna&oh=8ec7077036bd9a2ed76928a3aa393083&oe=5F6B002E"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
