import axios from "axios";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: 2,
  time: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);
  const router = useRouter();

  const submitForm = () => {
    axios
      .post("/api/resources", form)
      .then((_) => {
        router.push("/");
      })
      .catch((e) => {
        alert(e?.response?.data);
      });
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const resetForm = () => {
    setForm(DEFAULT_DATA);
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add new Resource</h1>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    name="title"
                    onChange={handleInputChange}
                    value={form.title}
                    className="input"
                    type="text"
                    placeholder="Title"
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  onChange={handleInputChange}
                  name="description"
                  value={form.description}
                  className="textarea"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Priority</label>
              <div className="control">
                <div className="select">
                  <select
                    onChange={handleInputChange}
                    name="priority"
                    value={form.priority}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Link</label>
              <div className="control">
                <input
                  onChange={handleInputChange}
                  name="link"
                  value={form.link}
                  className="input"
                  type="text"
                  placeholder="Link"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Time to finish</label>
              <div className="control">
                <input
                  onChange={handleInputChange}
                  name="time"
                  value={form.time}
                  className="input"
                  type="text"
                  placeholder="60"
                />
                <p class="help">Time is in minutes</p>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button onClick={submitForm} className="button is-link">
                  Add
                </button>
              </div>
              <div className="control">
                <button onClick={resetForm} className="button is-link is-light">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
