import React, { useState } from "react";
import { Users, BarChart3, Calendar, Mail } from "lucide-react";

const LeadsComponent = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-dark">Leads Management</h2>
      <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
        Add New Lead
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">
              Total Leads
            </p>
            <p className="text-3xl font-bold text-dark mt-1">248</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">
              New This Month
            </p>
            <p className="text-3xl font-bold text-dark mt-1">42</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">
              Converted
            </p>
            <p className="text-3xl font-bold text-dark mt-1">86</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">Pending</p>
            <p className="text-3xl font-bold text-dark mt-1">14</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-light">
      <div className="px-6 py-4 border-b border-light">
        <h3 className="text-lg font-semibold text-dark">Recent Leads</h3>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-4 bg-light rounded-lg hover:opacity-80 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  J{item}
                </div>
                <div>
                  <p className="font-semibold text-dark">John Doe {item}</p>
                  <p className="text-sm text-dark opacity-70">
                    john{item}@example.com
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">
                  Web Development
                </p>
                <p className="text-xs text-dark opacity-50">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default LeadsComponent;
