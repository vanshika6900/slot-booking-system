import React from "react";

function ProfileDets() {
  return (
    <div class="mt-6">
      <div class="flex items-center">
        <i class="bi bi-envelope mr-3"></i>
        <div class="flex-1">
          <h6 class="text-dark-purple dark:text-white font-medium mb-0">
            Email :
          </h6>
          <a href="" class="text-slate-400">
            jennyhot@hotmail.com
          </a>
        </div>
      </div>
      <div class="flex items-center mt-3">
        <i class="bi bi-geo-alt mr-3"></i>
        <div class="flex-1">
          <h6 class="text-dark-purple dark:text-white font-medium mb-0">
            Address
          </h6>
          <div class="text-slate-400">wertyu123,Delhi</div>
        </div>
      </div>

      <div class="flex items-center mt-3">
        <i class="bi bi-globe2 mr-3"></i>
        <div class="flex-1">
          <h6 class=" text-dark-purple dark:text-white font-medium mb-0">
            Website :
          </h6>
          <a href="" class="text-slate-400">
            www.kristajoseph.com
          </a>
        </div>
      </div>

      <div class="flex items-center mt-3">
        <i class="bi bi-telephone mr-3"></i>

        <div class="flex-1">
          <h6 class="text-dark-purple dark:text-white font-medium mb-0">
            Phone No :
          </h6>
          <a href="" class="text-slate-400">
            (+12) 1254-56-4896
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDets;
