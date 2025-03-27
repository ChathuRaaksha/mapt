import { Destination } from '../models/Destination';
import stockholm from '../assets/images/stockholm.jpg';
import orebro from '../assets/images/orebro.jpg';
import gothenburg from '../assets/images/gottenburg.jpg';
import kiruna from '../assets/images/northern-lights.jpg';
import malmo from '../assets/images/malmo.jpg';
import linkoping from '../assets/images/linkoping.jpg';
import upssala from '../assets/images/upssala.jpg';
export class DestinationService {
  static async getDestinations(): Promise<Destination[]> {
    return [
      {
        id: 1,
        name: 'Stockholm',
        region: 'East Sweden',
        description: 'The vibrant capital city with rich history',
        imageUrl: stockholm,
        attractions: ['Old Town', 'Vasa Museum', 'Skansen']
      },
      {
        id: 2,
        name: 'Göteborg',
        region: 'Götaland', // West Sweden
        description: 'A lively coastal city known for its maritime heritage and cultural scene.',
        imageUrl: gothenburg,
        attractions: [
          'Liseberg Amusement Park', // Iconic theme park
          'Haga District',          // Charming historic area
          'Universeum',             // Science center and aquarium
          'Göteborg Archipelago'    // Beautiful nearby islands
        ]
      },
      {
        id: 3,
        name: 'Örebro',
        region: 'Svealand', // Central Sweden
        description: 'A historic city with a picturesque castle and serene natural surroundings.',
        imageUrl: orebro,
        attractions: [
          'Örebro Castle',         // Medieval fortress in the city center
          'Wadköping Open-Air Museum', // Historical village
          'Svampen Water Tower',   // Unique observation tower
          'Lake Hjälmaren'         // Nearby lake for outdoor activities
        ]
      },
      {
        id: 4,
        name: 'Kiruna',
        region: 'Norrland', // Northern Sweden
        description: 'A remote Arctic town famous for its natural wonders and mining heritage.',
        imageUrl: kiruna,
        attractions: [
          'Icehotel',              // World-famous ice hotel
          'Aurora Borealis Viewing', // Northern Lights hotspot
          'Kiruna Church',         // Stunning wooden architecture
          'Abisko National Park'   // Nearby park for hiking and nature
        ]
      },

      {
        id: 5,
        name: 'Malmö',
        region: 'Skåne County', // Northern Sweden
        description: 'A diverse and modern city in southern Sweden, connected to Copenhagen.',
        imageUrl: malmo,
        attractions: [
          'Turning Torso',              // World-famous ice hotel
          'Malmö Castle', // Northern Lights hotspot
          'Lilla Torg',         // Stunning wooden architecture
          'Ribersborg Beach'   // Nearby park for hiking and nature
        ]
      },
     
      {
        id: 6,
        name: 'Uppsala',
        region: 'Uppsala County', // Northern Sweden
        description: 'A historic university city known for its rich Viking history and Sweden’s oldest university.',
        imageUrl: upssala,
        attractions: [
          'Uppsala Cathedral',              // World-famous ice hotel
          'Gustavianum Museum', // Northern Lights hotspot
          'Uppsala Castle',         // Stunning wooden architecture
          'Linnaeus Garden'   // Nearby park for hiking and nature
        ]
      },
      {
        id: 7,
        name: 'Linköping',
        region: 'Östergötland County', // Northern Sweden
        description: 'A city with a strong aerospace industry, medieval history, and a lively university atmosphere.',
        imageUrl: linkoping,
        attractions: [
          'Linköping Cathedral,',              // World-famous ice hotel
          'Gamla Linköping', // Northern Lights hotspot
          'Swedish Air Force Museum',         // Stunning wooden architecture
          'Berg Locks'   // Nearby park for hiking and nature
        ]
      },
      
    ];
  }
}