"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Advantage",
    embedded: false
  },
  {
    name: "AdvantageIcon",
    embedded: false
  },
  {
    name: "Area",
    embedded: false
  },
  {
    name: "Booking",
    embedded: false
  },
  {
    name: "Contact",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Favorite",
    embedded: false
  },
  {
    name: "Hotel",
    embedded: false
  },
  {
    name: "HotelPhoto",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "PostCategory",
    embedded: false
  },
  {
    name: "PostHero",
    embedded: false
  },
  {
    name: "PostPhotos",
    embedded: false
  },
  {
    name: "Profile",
    embedded: false
  },
  {
    name: "ROLE",
    embedded: false
  },
  {
    name: "ROOM_TYPE",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Room",
    embedded: false
  },
  {
    name: "RoomPhoto",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserPhoto",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://bookme-stag-4f528fda6c.herokuapp.com/stag/dev`
});
exports.prisma = new exports.Prisma();
