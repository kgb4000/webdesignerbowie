import { useState } from 'react'
import styled from 'styled-components'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.name > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      'https://bmsqq562he.execute-api.us-east-1.amazonaws.com/prod/bowieseoemail'

    const body = JSON.stringify({
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      message: inputs.message,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })

    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <>
      <div>
        <Conversion>
          <div className="ready-text"></div>
          <form onSubmit={handleOnSubmit}>
            <div className="form-input">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                id="phone"
                type="text"
                onChange={handleOnChange}
                value={inputs.phone}
              />
            </div>
            <div className="form-input">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
                placeholder="Your message."
              ></textarea>
            </div>
            <SubmitButton
              type="submit"
              disabled={status.submitting || isEnabled}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'I Want a Website  for My Business'
                  : 'Got it!'
                : 'Submitting...'}
            </SubmitButton>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">We Got Your Message!</div>
            )}
          </form>
        </Conversion>
      </div>
    </>
  )
}

const SubmitButton = styled.button`
  cursor: pointer;
  padding: 1.2rem 1.5rem;
  color: #fff;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  border: 1px solid #2ecc71;
  background: #2ecc71;
  border-radius: 10px;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 700;
  box-shadow: 0px 8px 0px #27ae60;
  margin: 2rem 0;
  outline: none;
  text-transform: uppercase;
  width: 100%;

  &:hover {
  background-color: #3e8e41;
  box-shadow: 0 5px ##27ae61;
  transform: translateY(4px);

  &:active {
  background-color: #3e8e41;
  box-shadow: 0 5px ##27ae61;
  transform: translateY(4px);
`

const Conversion = styled.div`
  form {
    max-width: 760px;
    margin: 0 auto;
    margin-bottom: 4rem;
    padding: 0 2rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
  }

  textarea {
    height: 200px;
  }

  label {
    margin-bottom: 1rem;
  }
`
