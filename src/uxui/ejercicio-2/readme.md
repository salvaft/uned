# PARKINEO
Una app para encontrar aparcamiento.

# Market survey / product brainstorming
- [x] A web app to not only find parking in crowded areas but to reserve and manage your reservation or parking remotely.

# Core requirements and UXUI skeleton 
- [x] Straight forward search prompt as a center UI
- [x] GIS Map feedback while searching for parking
- [x] Bottom line hero with advantages over traditional parking systems
    - [x] Extend if needed with custom notification
    - [x] Pay minute wise
    - [x] Reserve in advance
    - [x] Personalized notifications
- [ ] Easily identifiable available parking places
- [x] Smartphone app available

# Tests / guarantee of service
- Unit tests where applicable
- End to end tests
    - Geolocalization
    - Payment
    - Booking tracking
    - Notification system
- Global review by the rest of the team

# Accesibility
- Fact check best practices of available guides like [w3c](https://www.w3.org/WAI/design-develop/) wherever it might apply, and at least:
    - Review HTML semantic usage
    - Use alt captions and labels
    - Test using accesibility tools like at least screen readers
    - Test colors for contrast diagnostic
    - Test focusable/tab items (interactive) elements are easily identifiable
        - Are they ordered?
        - Is the focused state noticeable?
- Global review by the rest of the team
- Usability tests (review with real users)


# Once the core functionalities are working and tested, and usability and accesibility principles have been applied and reviewed: TODOs
- **Mobile web app version**
- Show price estimate with 2 or 3 plausible durations
- Enhance payment system with (bizum, save card for later, monthly wihdrawal...)
- Translations
- Voice control using native APIs in the smartphone app
