import { Provider } from "@nestjs/common";
import { baseGrpc } from '@api-gateway-nestjs/utils/base.grpc';

export const grpcAuth: Provider =
  baseGrpc('AUTH_PACKAGE', {
    options: {
      url: 'auth-service.auth-namespace.svc.cluster.local:50001',
      package: [],
      protoPath: 'auth/auth.proto'
    }
  });

export const grpcMs100: Provider =
  baseGrpc('100_PACKAGE', {
    options: {
      url: 'ms100-service.ms100-namespace.svc.cluster.local:50100',
      package: ['country', 'estate', 'city', 'address'],
      protoPath: '100/100.proto'
    }
  });

export const grpcMs200: Provider =
  baseGrpc('200_PACKAGE', {
    options: {
      url: 'ms200-service.ms200-namespace.svc.cluster.local:50200',
      package: ['company', 'office', 'department', 'office_department'],
      protoPath: '200/200.proto'
    }
  });

export const grpcMs300: Provider =
  baseGrpc('300_PACKAGE', {
    options: {
      url: 'ms300-service.ms300-namespace.svc.cluster.local:50300',
      package: ['type_person', 'type_identification', 'person'],
      protoPath: '300/300.proto'
    }
  });

export const grpcMs400: Provider =
  baseGrpc('400_PACKAGE', {
    options: {
      url: 'ms400-service.ms400-namespace.svc.cluster.local:50400',
      package: ['menu', 'profile', 'profile_menu', 'user', 'user_profile'],
      protoPath: '400/400.proto'
    }
  });