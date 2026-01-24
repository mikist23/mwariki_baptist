import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DonatePage() {
  const location = useLocation()
  const { cause } = location.state || {} // Get the cause data from state if it exists

  const [paymentMethod, setPaymentMethod] = useState('mpesa') // 'mpesa' or 'card'
  const [amount, setAmount] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  // If a cause was passed, these might be pre-filled or used for display, 
  // but for now we just show the cause details.

  const handleDonate = (e) => {
    e.preventDefault()
    const donationTarget = cause ? cause.title : "General Fund"
    alert(`Thank you for your donation of ${amount} to ${donationTarget}! This is a simulation.`)
  }

  return (
    <div className="font-sans text-gray-600 antialiased bg-gray-50 min-h-screen flex flex-col">
      <Navbar solid={true} /> 
      
      <main className="flex-grow pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section - Changes based on context */}
          <div className="text-center mb-12">
            {cause ? (
              <>
                 <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                  Selected Cause
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">{cause.title}</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  {cause.description}
                </p>
                
                {/* Progress Bar for specific cause */}
                <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between text-sm font-bold uppercase text-gray-500 mb-2">
                    <span>Raised: <span className="text-primary">{cause.raised}</span></span>
                    <span>Goal: <span className="text-gray-900">{cause.goal}</span></span>
                  </div>
                  <div className="relative w-full bg-gray-200 h-3 rounded-full">
                    <div className="absolute top-0 left-0 bg-primary h-3 rounded-full transition-all duration-1000" style={{width: `${cause.pct}%`}}></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Support Our Mission</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Your generosity helps us continue our work. Choose a payment method below to make a general donation or browse our causes to support a specific need.
                </p>
              </>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
            {/* Sidebar / Tabs */}
            <div className="md:w-1/3 bg-gray-50 border-r border-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Payment Method</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setPaymentMethod('mpesa')}
                  className={`w-full flex items-center p-4 rounded-lg border-2 transition-all ${paymentMethod === 'mpesa' ? 'border-primary bg-primary/5 text-primary' : 'border-transparent bg-white hover:bg-gray-100 text-gray-600'}`}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-3">
                    {paymentMethod === 'mpesa' && <div className="w-3 h-3 rounded-full bg-current" />}
                  </div>
                  <span className="font-bold">M-Pesa</span>
                </button>

                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center p-4 rounded-lg border-2 transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5 text-primary' : 'border-transparent bg-white hover:bg-gray-100 text-gray-600'}`}
                >
                   <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-3">
                    {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-current" />}
                  </div>
                  <span className="font-bold">Card / Global</span>
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:w-2/3 p-6 md:p-8">
              <form onSubmit={handleDonate}>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  {cause ? `Donate to ${cause.title}` : (paymentMethod === 'mpesa' ? 'M-Pesa Details' : 'Card Details')}
                </h3>

                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Donation Amount (KES)</label>
                    <input 
                      type="number" 
                      required
                      placeholder="e.g. 5000"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                {paymentMethod === 'mpesa' && (
                  <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">M-Pesa Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0712 345 678"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-2">You will receive an M-Pesa prompt on this number.</p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm text-blue-800">
                      <i className="fas fa-globe mr-2"></i>
                      We accept major credit cards and international payments.
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Card Number</label>
                      <input 
                        type="text" 
                        required
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Expiry Date</label>
                        <input 
                          type="text" 
                          required
                          placeholder="MM / YY"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">CVC</label>
                        <input 
                          type="text" 
                          required
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full mt-4 bg-primary text-white font-bold py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition transform hover:-translate-y-1"
                >
                  {cause ? `Donate to ${cause.title}` : 'Confirm Donation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
