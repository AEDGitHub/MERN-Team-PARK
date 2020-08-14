import React from "react";
import M from "materialize-css";

class InterestEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.interest;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { _id, name, description, category, img } = this.state;
    let formData = new FormData();
    formData.append("_id", _id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("user", this.props.currentUser);
    if (img) formData.append("img", img);

    this.props.updateInterest(formData);
  }

  componentDidMount() {
    let editIntNameField = document.getElementById("edit-interest-name-input");
    M.CharacterCounter.init(editIntNameField);
    M.textareaAutoResize(editIntNameField);

    let editIntDescField = document.getElementById("edit-interest-description-input");
    M.CharacterCounter.init(editIntDescField);
    M.textareaAutoResize(editIntDescField);

    M.FormSelect.init(this.FormSelect, {
      dropdownOptions: { container: document.body, constrainWidth: false }
    });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  onImageChange(e) {
    const image = e.target.files[0];
    if ((image.size / 1024 / 1024).toFixed(4) > 3) {
      alert("Only enter files smaller than 3MB");
      return;
    }
    this.setState({ img: image });
  }

  render() {
    return (
      <div className="modal-content">
        <div>
          <form
            className="interest-create-container"
            onSubmit={this.handleSubmit}
          >
            <div className="interest-create-content">
              <h4 className="interest-create-title">Edit interest</h4>

              <div className="row">
                <div className="interest-create-input-holder">
                  <textarea
                    id="edit-interest-name-input"
                    className="materialize-textarea"
                    value={this.state.name}
                    data-length="40"
                    onChange={this.update("name")}
                    required
                  />
                  <label htmlFor="edit-interest-name-input" className="active">
                    Interest name *
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="interest-create-input-holder">
                  <textarea
                    id="edit-interest-description-input"
                    className="materialize-textarea"
                    data-length="120"
                    value={this.state.description}
                    onChange={this.update("description")}
                    required
                  />
                  <label
                    htmlFor="edit-interest-description-input"
                    className="active"
                  >
                    Interest description *
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="interest-create-input-holder">
                  <select
                    onChange={this.update("category")}
                    value={this.state.category}
                    required
                    ref={(FormSelect) => {
                      this.FormSelect = FormSelect;
                    }}
                  >
                    <option value="default" disabled>
                      Choose a category *
                    </option>
                    <option value="Outdoors & Adventure">
                      Outdoors & Adventure
                    </option>
                    <option value="Food & Drink">Food & Drink</option>
                    <option value="Hobbies & Crafts">Hobbies & Crafts</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="file-field interest-create-input-holder">
                  <div className="btn">
                    <span>Image</span>
                    <input
                      type="file"
                      onChange={this.onImageChange}
                      accept="image/*"
                    />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path"
                      type="text"
                      placeholder="Choose an image to upload"
                    />
                  </div>
                </div>
              </div>

              <input
                type="submit"
                value="Edit Interest"
                className={`interest-create-button modal-close 
                ${this.state.name === "" || this.state.description === "" ||
                this.state.category === "" ? "disabled" : ""}`}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default InterestEditForm;
