import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DonatePage() {
  const location = useLocation()
  const { cause } = location.state || {}

  const [paymentMethod, setPaymentMethod] = useState('mpesa')
  const [amount, setAmount] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  const handleDonate = (e) => {
    e.preventDefault()
    const donationTarget = cause ? cause.title : 'General Fund'
    alert(`Thank you for your donation of ${amount} to ${donationTarget}. This is a simulation.`)
  }

  return (
    <div className="min-h-screen bg-surfaceAlt flex flex-col">
      <Navbar variant="solid" />

      <main className="pt-32 pb-20 section-wrap flex-1">
        <div className="section-head mb-10">
          <span className="kicker">Stewardship and Giving</span>
          <h1 className="section-title mt-5">{cause ? `Support: ${cause.title}` : 'Support Our Mission'}</h1>
          <p className="section-subtitle">
            {cause
              ? cause.description
              : 'Your generosity supports discipleship, outreach, family care, and ministry expansion at Mwariki Baptist.'}
          </p>
        </div>

        <div className="card-elevated overflow-hidden md:grid md:grid-cols-3">
          <aside className="bg-accentSoft border-r border-primary/20 p-6 md:p-8">
            <h2 className="font-serif text-2xl text-ink font-bold">Payment Method</h2>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('mpesa')}
                className={`rounded-2xl border px-4 py-3 text-left font-semibold ${
                  paymentMethod === 'mpesa' ? 'border-primary bg-white text-primary' : 'border-borderSoft bg-white text-ink'
                }`}
              >
                M-Pesa
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`rounded-2xl border px-4 py-3 text-left font-semibold ${
                  paymentMethod === 'card' ? 'border-primary bg-white text-primary' : 'border-borderSoft bg-white text-ink'
                }`}
              >
                Card / Global
              </button>
            </div>

            {cause && (
              <div className="mt-8 text-sm">
                <p className="text-slate-500 uppercase tracking-widest">Cause Progress</p>
                <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${cause.pct}%` }}></div>
                </div>
                <p className="mt-3 text-slate-600">Raised {cause.raised} of {cause.goal}</p>
              </div>
            )}
          </aside>

          <section className="md:col-span-2 p-6 md:p-8">
            <form onSubmit={handleDonate} className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-slate-500">Donation Amount (KES)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 5000"
                  className="input-shell mt-2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {paymentMethod === 'mpesa' && (
                <div>
                  <label className="text-xs uppercase tracking-widest text-slate-500">M-Pesa Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="0712 345 678"
                    className="input-shell mt-2"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              )}

              {paymentMethod === 'card' && (
                <>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-slate-500">Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      className="input-shell mt-2"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-slate-500">Expiry</label>
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        className="input-shell mt-2"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-slate-500">CVC</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="input-shell mt-2"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              <button type="submit" className="btn-primary w-full md:w-auto">
                {cause ? `Donate to ${cause.title}` : 'Confirm Donation'}
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
