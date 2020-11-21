export const config = {
  grpc_port:  process.env.MS100_PORT!.toString(),
  mongodb_uri: process.env.MONGODB_URI!.toString(),
  mongodb_user: process.env.MONGODB_USER!.toString(),
  mongodb_pass: process.env.MONGODB_PASS!.toString(),
};