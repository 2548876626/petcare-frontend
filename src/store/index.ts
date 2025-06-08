import { defineStore } from 'pinia'

// 用户状态
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as any | null,
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || '',
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    isPetOwner: (state) => state.role === 'pet-owner',
    isServiceProvider: (state) => state.role === 'service-provider',
    isAdmin: (state) => state.role === 'admin',
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    setRole(role: string) {
      this.role = role
      localStorage.setItem('role', role)
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    logout() {
      this.token = ''
      this.role = ''
      this.userInfo = null
      localStorage.removeItem('token')
      localStorage.removeItem('role')
    }
  },
})

// 宠物状态
export const usePetStore = defineStore('pet', {
  state: () => ({
    pets: [] as any[],
    currentPet: null as any | null,
  }),
  actions: {
    setPets(pets: any[]) {
      this.pets = pets
    },
    setCurrentPet(pet: any) {
      this.currentPet = pet
    },
    addPet(pet: any) {
      this.pets.push(pet)
    },
    updatePet(updatedPet: any) {
      const index = this.pets.findIndex(pet => pet.id === updatedPet.id)
      if (index !== -1) {
        this.pets[index] = updatedPet
      }
    },
    removePet(petId: string | number) {
      this.pets = this.pets.filter(pet => pet.id !== petId)
    }
  }
})

// 服务状态
export const useServiceStore = defineStore('service', {
  state: () => ({
    services: [] as any[],
    currentService: null as any | null,
  }),
  actions: {
    setServices(services: any[]) {
      this.services = services
    },
    setCurrentService(service: any) {
      this.currentService = service
    },
    addService(service: any) {
      this.services.push(service)
    },
    updateService(updatedService: any) {
      const index = this.services.findIndex(service => service.id === updatedService.id)
      if (index !== -1) {
        this.services[index] = updatedService
      }
    },
    removeService(serviceId: string | number) {
      this.services = this.services.filter(service => service.id !== serviceId)
    }
  }
})

// 预约状态
export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookings: [] as any[],
    currentBooking: null as any | null,
  }),
  actions: {
    setBookings(bookings: any[]) {
      this.bookings = bookings
    },
    setCurrentBooking(booking: any) {
      this.currentBooking = booking
    },
    addBooking(booking: any) {
      this.bookings.push(booking)
    },
    updateBooking(updatedBooking: any) {
      const index = this.bookings.findIndex(booking => booking.id === updatedBooking.id)
      if (index !== -1) {
        this.bookings[index] = updatedBooking
      }
    },
    removeBooking(bookingId: string | number) {
      this.bookings = this.bookings.filter(booking => booking.id !== bookingId)
    }
  }
}) 