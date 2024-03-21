import React, { useEffect, useState } from 'react';

import { IAppConfig } from '../../utils/Content';

const SiteSettings = () => {
  const [config, setConfig] = useState<IAppConfig>();

  useEffect(() => {
    if (config == null) {
      (async () => {
        const response = await fetch('/api/get/site-setting', {
          method: 'GET',
        });
        const body = await response.json();
        setConfig(body.data);
        console.log(body.data);
      })();
    }
  }, []);

  return (
    <div className="w-full px-20 py-10">
      <div className="text-2xl font-bold">Site Settings</div>
      <div>
        <form className="flex flex-col">
          <div>
            <div className="text-lg font-bold">SEO</div>
            <div className="mb-6">
              <label
                htmlFor="site_name"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                site_name
              </label>
              <input
                type="text"
                id="title"
                name="site_name"
                defaultValue={config?.seo.site_name ?? ''}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="site_title"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                site_title
              </label>
              <input
                type="text"
                id="site_title"
                name="site_title"
                defaultValue={config?.seo.site_title ?? ''}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <input
            className="hover:shadow-form w-full rounded-md bg-indigo-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SiteSettings;
