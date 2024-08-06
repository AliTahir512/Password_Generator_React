import React from 'react'

function PasswordGenerator() {
  return (
    <div>
      <div class="max-w-md mx-auto bg-gray-500 p-8 shadow-md rounded-lg">
  <div class="mb-4">
    <input type="text" id="generated-password" class="w-full px-4 py-2 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" readonly />
    <button class="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Copy Password</button>
  </div>
  <div class="mb-4">
    <label class="flex items-center">
      <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
      <span class="ml-2 text-white">Include Numbers</span>
    </label>
    <label class="flex items-center mt-2">
      <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
      <span class="ml-2 text-white">Include Lowercase Letters</span>
    </label>
    <label class="flex items-center mt-2">
      <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
      <span class="ml-2 text-white">Include Uppercase Letters</span>
    </label>
    <label class="flex items-center mt-2">
      <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
      <span class="ml-2 text-white">Include Special Characters</span>
    </label>
  </div>
  <div class="mb-6">
    <label for="password-length" class="block text-white">Password Length</label>
    <input type="range" id="password-length" min="8" max="20" class="w-full mt-2" />
    <span id="password-length-display" class="block text-center text-white 0 mt-2">12</span>
  </div>
  <button class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Generate Password</button>
</div>

    </div>
  )
}

export default PasswordGenerator
