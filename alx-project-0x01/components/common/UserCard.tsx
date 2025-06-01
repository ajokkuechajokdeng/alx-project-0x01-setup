import React from 'react';
import { Building2, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company }) => {
  return (
   <div>
        <div className="w-full max-w-xl hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">
                {id}, {name.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-500">@{username}</p>
          </div>
        </div>
    
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
              </div>
              
              <div className="flex items-center gap-2">
                <span>{phone}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a href="" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  {website}
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div>
                  <p>{address?.street}</p>
                  <p>{address?.suite}</p>
                  <p>{address?.city}, {address?.zipcode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-start gap-2">
              <div>
                <p className="font-semibold">{company?.name}</p>
                <p className="text-gray-600 italic">&quot;{company?.catchPhrase}&quot;</p>
                <p className="text-gray-500 text-sm">{company?.bs}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default UserCard;